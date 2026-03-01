#pragma once

#include <QString>

class QMainWindow;

class MainWindowStyle {
public:
    MainWindowStyle();

    void applyTo(QMainWindow& window) const;

private:
    QString stylesheet_;
};
