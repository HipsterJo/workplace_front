import { useEffect, useState } from "react";
import { Workplace } from "../../types";
import { getWorkplaces } from "../../api";
import WorkPlaceList from "../../components/WorkPlaceList/WorkPlaceList";
import { Link } from "react-router-dom";
import { Button } from "../../elements/Button/Button";
import styles from "./ListPage.module.css";

export const ListPage = () => {
  const [workplaces, setWorkplaces] = useState<Workplace[]>([]);

  useEffect(() => {
    const fetchWorkplaces = async () => {
      try {
        const data = await getWorkplaces();
        setWorkplaces(data);
      } catch (error) {
        console.error("Error fetching workplaces:", error);
      }
    };

    fetchWorkplaces();
  }, []);

  return (
    <div className={styles.listPage}>
      <div className={styles.createButton}>
        <Link to="/create">
          <Button>Create Workplace</Button>
        </Link>
      </div>
      <WorkPlaceList workplaces={workplaces} setWorkplaces={setWorkplaces} />
    </div>
  );
};
