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

// xóa dữ liệu user trong localStorage
export const logout = () => {
  // Clear user information from local storage
  localStorage.removeItem('user');
  // Reload the page
  window.location.reload();
};
