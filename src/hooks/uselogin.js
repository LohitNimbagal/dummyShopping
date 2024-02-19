const useLogin = async (userName, password) => {

    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    setLoading(true);

    console.log(userName, password);
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: userName,
        password: password,
        expiresInMins: 60
      });
      const authToken = response.data.token; // Assuming token is in response.data.token
      localStorage.setItem("authToken", authToken);
      setToken(authToken);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }

    return token, loading, error
  };

  export default useLogin