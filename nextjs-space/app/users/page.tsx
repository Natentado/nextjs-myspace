import UserCard from '@/components/UserCard';
import styles from './style.module.scss';
import { prisma } from '@/lib/prisma';

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <main>
        <div className={styles.userListContainer}>
            {users.map((user) => {
                return <UserCard key={user.id} {...user} />;
            })}
        </div>
    </main>
  );
}