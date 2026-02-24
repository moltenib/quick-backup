#include <string>
#include <vector>

#include <QApplication>
#include <QCoreApplication>
#include <QDir>
#include <QIcon>
#include <QLocale>
#include <QTranslator>

#include "MainWindow.hpp"

namespace {

const std::vector<std::string> kIconCandidates = {
    "folder-sync",
    "document-save",
};

std::string pick_icon_name() {
    for (const auto& candidate : kIconCandidates) {
        if (!QIcon::fromTheme(QString::fromStdString(candidate)).isNull()) {
            return candidate;
        }
    }
    return "";
}

void install_app_translator(QApplication& app) {
    const QLocale locale = QLocale::system();
    const QString language = locale.name().section('_', 0, 0).toLower();
    if (language == "en") {
        return;
    }

    const QString locale_name = locale.name();
    const QString app_dir = QCoreApplication::applicationDirPath();
    const QString cwd = QDir::currentPath();
    const QStringList search_dirs = {
        QDir(app_dir).filePath("i18n/qm"),
        QDir(cwd).filePath("i18n/qm"),
    };
    const QStringList suffixes = {
        locale_name,
        language,
    };

    auto* translator = new QTranslator(&app);
    for (const QString& search_dir : search_dirs) {
        for (const QString& suffix : suffixes) {
            if (translator->load("simple-mirror_" + suffix, search_dir)) {
                app.installTranslator(translator);
                return;
            }
        }
    }

    delete translator;
}

}  // namespace

int main(int argc, char* argv[]) {
    QApplication app(argc, argv);
    app.setStyle("Fusion");
    install_app_translator(app);

    const std::string icon_name = pick_icon_name();
    if (!icon_name.empty()) {
        app.setWindowIcon(QIcon::fromTheme(QString::fromStdString(icon_name)));
    }

    MainWindow window(icon_name);
    window.show();
    return app.exec();
}
