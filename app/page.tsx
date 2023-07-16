import CreateTask from '@/components/CreateTask'
import ViewTask from '@/components/ViewTask'
import Head from '@/components/Header'
import { Task, User } from '@/typings'


export default function Home() {
  return (
    <main>
      <Head />
      <CreateTask />
      <ViewTask />
    </main>
  )
}
