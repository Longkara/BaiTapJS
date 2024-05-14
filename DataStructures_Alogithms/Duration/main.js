function formatDuration(seconds) {
  //Kiểm tra giá trị đầu vào bằng 0
  if (seconds === 0) {
    return "now";
  }
  //Định nghĩa các đơn vị thời gian
  const units = [
    { label: "year", seconds: 365 * 24 * 60 * 60 }, // 1 năm = 365 ngày *24 giờ * 60 phút * 60 giây
    { label: "day", seconds: 24 * 60 * 60 }, // 1 ngày = 24 giờ * 60 phút * 60 giây
    { label: "hour", seconds: 60 * 60 }, //1 giờ = 60 phút * 60 giây
    { label: "minute", seconds: 60 }, //1 phút = 60 giây
    { label: "second", seconds: 1 }, //1 giây = 1 giây
  ];
  //tính toán từng đơn vị thời gian
  const timeComponents = [];
  for (const unit of units) {
    if (seconds >= unit.seconds) {
      //Kiểm tra xem số giây có lơn hơn hoặc bằng số giây của đơn vị hiện tại ko
      const value = Math.floor(seconds / unit.seconds);
      seconds -= value * unit.seconds;
      timeComponents.push(`${value} ${unit.label}${value > 1 ? "s" : ""}`);
    }
  }

  if (timeComponents.length === 1) {
    return timeComponents[0];
  } else {
    const lastComponent = timeComponents.pop(); //lấy ra phần tử cuối
    return timeComponents.join(",") + " and " + lastComponent; // nối các phần tử với dấu phẩy và and
  }
}
console.log(formatDuration(1));
console.log(formatDuration(120));
console.log(formatDuration(63));
console.log(formatDuration(3660));
