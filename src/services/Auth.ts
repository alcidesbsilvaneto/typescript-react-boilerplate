class AuthService {
  setAuthData = (token: string, name: string, role: string): void => {
    localStorage.setItem("user_token", token);
    localStorage.setItem("user_name", name);
    localStorage.setItem("user_role", role);
  };

  logout = (): void => {
    localStorage.clear();
    window.location.href = "/login";
  };
}

export default new AuthService();
