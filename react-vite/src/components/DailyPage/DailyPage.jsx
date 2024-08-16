import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate} from "react-router-dom";
import "./DailyPage.css"; // Your custom styles for DailyPage
import {thunkFetchDailies } from "../../redux/dailies";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import AddDailyModal from "../AddDailyModal";
import DeleteDailyModal from "../DeleteDailyModal";
import UpdateDailyModal from "../UpdateDailyModal";

function DailyPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const dailiesObj = useSelector(state => state.dailies);
  const dailies = Object.values(dailiesObj);

  useEffect(() => {
    (async () => {
      if (sessionUser) {
        await dispatch(thunkFetchDailies());
      }
    })();
  }, [dispatch, sessionUser]);

  function formatDate(dateString) {
    const newDate = new Date(dateString.toLocaleString());
    const year = newDate.getFullYear();
    const month = ('0' + (newDate.getMonth() + 1)).slice(-2);
    const day = ('0' + (parseInt(newDate.getDate()) + 1)).slice(-2);
    const dateStr = `${year}-${month}-${day}`;
    return dateStr;
  }


  return (
    <div className="habitica-wrapper">
      {!sessionUser && <Navigate to="/" />}
      <div className="habitica-header">
        <h1>My Habits</h1>
        <OpenModalMenuItem
          itemText="Add Habit"
          modalComponent={<AddDailyModal />}
        />
      </div>

      <div className="habitica-habits">
        {dailies.length ? dailies.map(daily => (
          <div key={daily.id} className="habitica-habit">
            <h2>{daily.title}</h2>
            <p>{daily.note}</p>
            <p><strong>Start Date: </strong>{formatDate(daily.start_date)}</p>
            <p><strong>Difficulty: </strong>{daily.difficulty}</p>
            <div className="habitica-habit-actions">
              <OpenModalMenuItem
                itemText="Update"
                modalComponent={<UpdateDailyModal dailyId={daily.id} />}
              />
              <OpenModalMenuItem
                itemText="Delete"
                modalComponent={<DeleteDailyModal dailyId={daily.id} />}
              />
            </div>
          </div>
        ))
          :
          <div className="no-info">
            No Dailies found. Create them here
          </div>
        }
      </div>

    </div>

  );
}

export default DailyPage;
