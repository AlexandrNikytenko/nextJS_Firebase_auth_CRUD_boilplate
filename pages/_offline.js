import { useUser } from "../firebase/useUser";

import { MainLayout } from "../components/MainLayout";

export default function offline() {
  const { user } = useUser();
  if (!user) return null;
  return (
    <MainLayout title={"Offline"}>
      <h1>
        You are currently offline, there is no way to perform this operation
      </h1>
      <div>Please connect to the internet</div>
    </MainLayout>
  );
}
