
/* this authlayout will apply to both signup and sigin pages */
const AuthLayout = ({ children }) => {
  return <div className="flex justify-center pt-30 pb-10">{children}</div>;
};

export default AuthLayout;
