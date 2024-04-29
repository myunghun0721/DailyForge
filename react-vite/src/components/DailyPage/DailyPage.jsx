import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import "./DailyPage.css"
import { fetchDailies, thunkFetchDailies } from "../../redux/dailies";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import AddDailyModal from "../AddDailyModal";
import DeleteDailyModal from "../DeleteDailyModal";
import UpdateDailyModal from "../UpdateDailyModal";


function DailyPage() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const dailiesObj = useSelector(state => state.dailies)
  const dailies = Object.values(dailiesObj)



  const navigate = useNavigate()


  if (!sessionUser) {
    navigate("/")
  }

  useEffect(() => {
    dispatch(thunkFetchDailies())
  }, [dispatch])

  function formatDate(dateString) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString("en-US", options);
  }

  return (
    <>
      <div className="daily-wrapper">
        <div className="manage-daily">
          <h1>Manage my Dailies</h1>
          <button className="add-daily-button">

            <OpenModalMenuItem
              itemText="Add Daily"
              //     onItemClick={closeMenu}
              modalComponent={<AddDailyModal />}
            />
          </button>
        </div>
        <div className="daily-container">
          {dailies.map(daily => (
            <div key={daily.id} className="daily-item">
              <h2>{daily.title} </h2>
              <p>{daily.note}</p>
              <p>{formatDate(daily.start_date)}</p>
              <p><strong>Difficulty: </strong>{daily.difficulty}</p>
              {/* <p>Do I do this again? {
                // console.log(daily)
              }
              </p> */}
              <button className="add-daily-button">
                <OpenModalMenuItem
                  itemText="Update Daily"
                  //     onItemClick={closeMenu}
                  modalComponent={<UpdateDailyModal dailyId={daily.id} />}
                />
              </button>
              <button className="add-daily-button">
                <OpenModalMenuItem
                  itemText="Delete Daily"
                  //     onItemClick={closeMenu}
                  modalComponent={<DeleteDailyModal dailyId={daily.id} />}
                />
              </button>
            </div>

          ))}
        </div>
      </div>
    </>
  );
}

export default DailyPage;