import { MainLayout } from "../components/MainLayout";
import NotAuthPage from "../components/NotAuthPage";
import { useUser } from "../firebase/useUser";

import styles from "../styles/Home.module.scss";

export default function Home({ connectedBank }) {
  const { user } = useUser();

  if (user) {
    return (
      <MainLayout title={"Home"}>
        content
      </MainLayout>
    );
  } else return <NotAuthPage />;
}
