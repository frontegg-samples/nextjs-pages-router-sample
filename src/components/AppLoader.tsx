import { useAuthState } from "@frontegg/nextjs";
const AppLoader = () => {
  const { isLoading } = useAuthState();

  return isLoading && <div className="spinner-wrapper"><div className="spinner"></div></div>;
};

export default AppLoader;
