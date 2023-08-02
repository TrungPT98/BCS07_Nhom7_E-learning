// lưu xuống local
export const luuXuongLocal = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

// lấy dữ liệu local
export const layDuLieuLocal = (name) => {
  const value = localStorage.getItem(name);

  if (JSON.parse(value)) {
    return JSON.parse(value);
  } else {
    return null;
  }
};
