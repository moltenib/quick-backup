#pragma once

#include <QWidget>

class QLabel;
class QLineEdit;
class QPushButton;

class DirectoryChooserWidget : public QWidget {
public:
    DirectoryChooserWidget(
        const QString& label_text,
        const QString& placeholder_text,
        const QString& chooser_title,
        const QString& label_object_name,
        const QString& line_edit_object_name,
        const QString& browse_button_object_name,
        QWidget* parent = nullptr);

    QString path() const;
    void setPath(const QString& path);

    void setChooserEnabled(bool enabled);

private:
    void open_dialog();
    void sync_entry_height();
    void update_entry_style();

    QString chooser_title_;
    QLabel* label_;
    QLineEdit* path_edit_;
    QPushButton* browse_button_;
};
