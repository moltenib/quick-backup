#pragma once

#include <chrono>

class QString;

namespace duration_format {

QString to_hh_mm_ss(std::chrono::milliseconds elapsed);

}  // namespace duration_format
