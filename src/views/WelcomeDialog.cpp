#include "views/WelcomeDialog.hpp"

#include <QApplication>
#include <QCoreApplication>
#include <QDialog>
#include <QDialogButtonBox>
#include <QHBoxLayout>
#include <QIcon>
#include <QLabel>
#include <QString>
#include <QVBoxLayout>
#include <QWidget>

void WelcomeDialog::show(QWidget* parent) {
    QDialog dialog(parent);
    dialog.setObjectName("welcome-dialog");

    QIcon dialog_icon;
    if (parent && !parent->windowIcon().isNull()) {
        dialog_icon = parent->windowIcon();
    } else {
        dialog_icon = QApplication::windowIcon();
    }

    if (!dialog_icon.isNull()) {
        dialog.setWindowIcon(dialog_icon);
    }

    dialog.setWindowTitle(QCoreApplication::translate("WelcomeDialog", "Welcome!"));
    dialog.setWindowModality(Qt::WindowModal);

    const QString accent_style =
        "<style>.accent { color: #2f8adf; font-weight: 600; }</style>";
    const QString body_text = accent_style + QCoreApplication::translate(
        "WelcomeDialog",
        "<p>It appears that no backups have been performed with this installation yet. How it works:</p>"
        "<p><span class='accent'>1)</span> Choose an origin. This is the folder to be backed up. It will not be modified by this "
        "program.</p>"
        "<p><span class='accent'>2)</span> Insert a back-up medium, like an external drive. This will be the destination.</p>"
        "<p><span class='accent'>3)</span> Press <span class='accent'>&quot;Synchronize&quot;</span> to turn the destination into a mirror of the origin. This is "
        "irreversible. Use with care!</p>"
        "<ul style='margin-top: 0px;'>"
        "<li>The two folders are compared.</li>"
        "<li>Files in the destination that do not exist in the origin will be <span style='color: #b51616; "
        "font-weight: 600;'>permanently deleted</span>.</li>"
        "<li>Files in the origin that are missing in the destination are copied from the origin.</li>"
        "</ul>"
        "<p><span class='accent'>Tip</span>: Holding Shift will turn "
        "&quot;Synchronize&quot; into <span class='accent'>&quot;Combine&quot;</span>; "
        "the contents of the destination are kept and merged with the origin's. Use this option if it fits your "
        "goals.<br><br>This message will disappear after the first run.</p>");

    auto* main_layout = new QVBoxLayout(&dialog);
    main_layout->setContentsMargins(12, 12, 12, 12);
    main_layout->setSpacing(8);

    auto* content_layout = new QHBoxLayout();
    content_layout->setContentsMargins(0, 0, 0, 0);
    content_layout->setSpacing(12);

    auto* icon_label = new QLabel(&dialog);
    icon_label->setAlignment(Qt::AlignTop | Qt::AlignHCenter);
    icon_label->setFixedWidth(56);
    if (!dialog_icon.isNull()) {
        icon_label->setPixmap(dialog_icon.pixmap(48, 48));
    }

    auto* text_label = new QLabel(&dialog);
    text_label->setTextFormat(Qt::RichText);
    text_label->setWordWrap(true);
    text_label->setText(body_text);
    text_label->setTextInteractionFlags(Qt::TextSelectableByMouse);

    content_layout->addWidget(icon_label, 0, Qt::AlignTop);
    content_layout->addWidget(text_label, 1);
    main_layout->addLayout(content_layout);

    auto* button_box = new QDialogButtonBox(QDialogButtonBox::Ok, &dialog);
    QObject::connect(button_box, &QDialogButtonBox::accepted, &dialog, &QDialog::accept);
    main_layout->addWidget(button_box);

    dialog.setFixedWidth(700);
    dialog.adjustSize();

    if (parent && parent->isVisible()) {
        QRect dialog_geometry = dialog.frameGeometry();
        dialog_geometry.moveCenter(parent->frameGeometry().center());
        dialog.move(dialog_geometry.topLeft());
    }

    dialog.exec();
}
