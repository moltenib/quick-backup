#include "views/StatusBarWidget.hpp"

#include <QFont>
#include <QLabel>
#include <QLayout>
#include <QSizePolicy>

StatusBarWidget::StatusBarWidget(QWidget* parent)
    : QStatusBar(parent),
      label_(new QLabel(this)) {
    setObjectName("status-bar");
    setSizeGripEnabled(false);
    setSizePolicy(QSizePolicy::Expanding, QSizePolicy::Expanding);
    setContentsMargins(0, 0, 0, 0);

    if (QLayout* status_layout = layout()) {
        status_layout->setContentsMargins(0, 0, 0, 0);
        status_layout->setSpacing(0);
    }

    label_->setObjectName("status-label");
    label_->setAlignment(Qt::AlignHCenter | Qt::AlignVCenter);
    label_->setSizePolicy(QSizePolicy::Expanding, QSizePolicy::Expanding);
    label_->setContentsMargins(0, 0, 0, 0);

    QFont status_font = label_->font();
    status_font.setPointSizeF(status_font.pointSizeF() * 1.1);
    label_->setFont(status_font);

    addWidget(label_, 1);
}

void StatusBarWidget::setStatusText(const QString& text) {
    label_->setText(text);
}

QString StatusBarWidget::statusText() const {
    return label_->text();
}
