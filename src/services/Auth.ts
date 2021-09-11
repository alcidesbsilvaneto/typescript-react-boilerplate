class AuthService {
  setAuthData = (token: string, name: string, role: string): void => {
    localStorage.setItem("user_token", token);
    localStorage.setItem("user_name", name);
    localStorage.setItem("user_role", role);
  };

  isAuthenticated = (): boolean => {
    const token = localStorage.getItem("user_token");
    return token ? true : false;
  };

  logout = (): void => {
    localStorage.clear();
    window.location.href = "/login";
  };
}

export default new AuthService();
