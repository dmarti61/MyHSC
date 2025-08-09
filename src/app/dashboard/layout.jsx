import navbar from '../../../components/navbar';

export default function DashboardLayout({ children }) {
  return (
    <>
      <navbar />
      <div className="nav-padding" />
      {children}
    </>
  );
}
