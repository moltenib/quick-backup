#include "views/ProgressBarWidget.hpp"

#include <QCoreApplication>

ProgressBarWidget::ProgressBarWidget(QWidget* parent)
    : QProgressBar(parent) {
    setObjectName("progress-bar");
    setRange(0, 100);
    setValue(0);
    setFormat(QCoreApplication::translate("MainWindow", "Idle"));
}
