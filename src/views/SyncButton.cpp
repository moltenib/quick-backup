#include "views/SyncButton.hpp"

#include <algorithm>

#include <QCoreApplication>
#include <QFontMetrics>
#include <QSizePolicy>
#include <QStyle>

SyncButton::SyncButton(QWidget* parent)
    : QPushButton(parent),
      synchronize_text_(QCoreApplication::translate("MainWindow", "Synchronize")),
      combine_text_(QCoreApplication::translate("MainWindow", "Combine")),
      stop_text_(QCoreApplication::translate("MainWindow", "Stop")),
      running_(false),
      combine_mode_(false) {
    setObjectName("sync-button");
    setSizePolicy(QSizePolicy::Fixed, QSizePolicy::Expanding);
    setProperty("combineMode", false);
    recomputeMinimumWidth();
    updateVisualState();
}

void SyncButton::setRunningState(bool running, bool combine_mode) {
    running_ = running;
    combine_mode_ = combine_mode;

    const bool combine_property = !running_ && combine_mode_;
    if (property("combineMode").toBool() != combine_property) {
        setProperty("combineMode", combine_property);
        style()->unpolish(this);
        style()->polish(this);
    }

    updateVisualState();
}

void SyncButton::recomputeMinimumWidth() {
    const QFontMetrics metrics(font());
    const int minimum_width = std::max(
                                  std::max(
                                      metrics.horizontalAdvance(synchronize_text_),
                                      metrics.horizontalAdvance(combine_text_)),
                                  metrics.horizontalAdvance(stop_text_)) +
                              32;
    setMinimumWidth(minimum_width);
}

void SyncButton::updateVisualState() {
    if (running_) {
        setText(stop_text_);
        return;
    }
    setText(combine_mode_ ? combine_text_ : synchronize_text_);
}
