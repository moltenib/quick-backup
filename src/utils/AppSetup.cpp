#include "utils/AppSetup.hpp"

#include <string>
#include <vector>

#include <QApplication>
#include <QCoreApplication>
#include <QDir>
#include <QFileInfo>
#include <QIcon>
#include <QLocale>
#include <QTranslator>
#include <QWidget>

namespace app_setup {

namespace {

const std::vector<std::string> kIconCandidates = {
    "folder-sync",
    "document-save",
};

const std::vector<std::string> kIconPathCandidates = {
    "resources/icons/icon.png",
    "resources/icons/icon.ico",
    "resources/icons/simple-mirror.png",
    "resources/icons/simple-mirror.ico",
};

}  // namespace

std::string pick_icon_name() {
    const QString app_dir = QCoreApplication::applicationDirPath();
    const QString cwd = QDir::currentPath();
    const QStringList search_roots = {
        app_dir,
        cwd,
    };

    for (const QString& search_root : search_roots) {
        for (const auto& candidate : kIconPathCandidates) {
            const QString icon_path = QDir(search_root).filePath(QString::fromStdString(candidate));
            QFileInfo icon_info(icon_path);
            if (icon_info.exists() && icon_info.isFile()) {
                return icon_info.absoluteFilePath().toStdString();
            }
        }
    }

    for (const auto& candidate : kIconCandidates) {
        if (!QIcon::fromTheme(QString::fromStdString(candidate)).isNull()) {
            return candidate;
        }
    }
    return "";
}

void apply_app_icon(QApplication& app, const std::string& icon_name) {
    if (icon_name.empty()) {
        return;
    }
    const QString icon_source = QString::fromStdString(icon_name);
    QFileInfo icon_file(icon_source);
    if (icon_file.exists() && icon_file.isFile()) {
        app.setWindowIcon(QIcon(icon_file.absoluteFilePath()));
        return;
    }
    app.setWindowIcon(QIcon::fromTheme(icon_source));
}

void apply_window_icon(QWidget& window, const std::string& icon_name) {
    if (icon_name.empty()) {
        return;
    }
    const QString icon_source = QString::fromStdString(icon_name);
    QFileInfo icon_file(icon_source);
    if (icon_file.exists() && icon_file.isFile()) {
        window.setWindowIcon(QIcon(icon_file.absoluteFilePath()));
        return;
    }
    window.setWindowIcon(QIcon::fromTheme(icon_source));
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
    const QStringList search_roots = {
        app_dir,
        cwd,
    };
    const QStringList locale_keys = {
        locale_name,
        language,
    };

    auto* translator = new QTranslator(&app);
    for (const QString& search_root : search_roots) {
        for (const QString& locale_key : locale_keys) {
            const QString qm_path = QDir(search_root).filePath(
                "resources/locales/" + locale_key + "/LC_MESSAGES/simple-mirror.qm");
            if (translator->load(qm_path)) {
                app.installTranslator(translator);
                return;
            }
        }
    }

    delete translator;
}

}  // namespace app_setup
