#include "utils/DurationFormat.hpp"

#include <chrono>

#include <QString>

namespace duration_format {

QString to_hh_mm_ss(std::chrono::milliseconds elapsed) {
    if (elapsed.count() < 0) {
        elapsed = std::chrono::milliseconds::zero();
    }

    const auto total_seconds = std::chrono::duration_cast<std::chrono::seconds>(elapsed).count();
    if (total_seconds < 3600) {
        const auto minutes = total_seconds / 60;
        const auto seconds = total_seconds % 60;
        return QStringLiteral("%1:%2")
            .arg(minutes)
            .arg(seconds, 2, 10, QChar('0'));
    }

    const auto hours = total_seconds / 3600;
    const auto minutes = (total_seconds % 3600) / 60;
    const auto seconds = total_seconds % 60;
    return QStringLiteral("%1:%2:%3")
        .arg(hours)
        .arg(minutes, 2, 10, QChar('0'))
        .arg(seconds, 2, 10, QChar('0'));
}

}  // namespace duration_format
