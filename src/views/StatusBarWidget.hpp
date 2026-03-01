#pragma once

#include <QStatusBar>

class QLabel;
class QString;

class StatusBarWidget : public QStatusBar {
public:
    explicit StatusBarWidget(QWidget* parent = nullptr);

    void setStatusText(const QString& text);
    QString statusText() const;

private:
    QLabel* label_;
};
