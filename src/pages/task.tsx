import { Layout } from "@components/layout/Layout";
import { ToDo } from "@components/screens";

export const TasksPage = () => {
  return (
    <Layout title='Tasks'>
      <ToDo />
    </Layout>
  );
};
