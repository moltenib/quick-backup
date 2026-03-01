#pragma once

#include <QPushButton>

class SyncButton : public QPushButton {
public:
    explicit SyncButton(QWidget* parent = nullptr);
    void setRunningState(bool running, bool combine_mode);

private:
    void recomputeMinimumWidth();
    void updateVisualState();

    QString synchronize_text_;
    QString combine_text_;
    QString stop_text_;
    bool running_;
    bool combine_mode_;
};
