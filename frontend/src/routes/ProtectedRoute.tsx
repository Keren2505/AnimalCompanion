import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {

  if (!AuthService.estaAutenticado()) {

    return <Navigate to="/login" replace />;

  }

  return children;

};

export default ProtectedRoute;