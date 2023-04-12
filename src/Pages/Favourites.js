import React from "react";
import Card from "../components/Card";
import SubBanner from "../components/SubBanner";
import Subscribe from "../components/Subscribe";
import NoData from "../components/Search/noData";

const Favourites = ({ watchList, setWatchList }) => {
  return (
    <>
      <SubBanner title={"My Favorite"} pathName={"Favourites"} />
      <section className="results-sec">
        <div className="container">
          <div className="section-title">
            <h5 className="sub-title">Online STREAMING</h5>
            <h2 className="title"> My Watch List</h2>
          </div>
          <div className="row movies-grid">
            {watchList.length ? (
              watchList.map((movie) => (
                <Card
                  movie={movie}
                  key={movie.imdbID}
                  setWatchList={setWatchList}
                  watchList={watchList}
                />
              ))
            ) : (
              <NoData />
            )}
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};
export default Favourites;
