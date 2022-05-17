const GameTable = (props) => {
  return (  
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>platform</th>
            <th>publisher</th>
            <th>rank</th>
            <th>year</th>
            <th>North American Sales</th>
            <th>Europe Sales</th>
            <th>Japan Sales</th>
            <th>Other Sales</th>
            <th>Global Sales</th>
          </tr>
        </thead>
        <tbody>
          {props.games.map((game, index) => {
            return(
              <tr key={index}>
              <td>{game.name}</td>
              <td>{game.genre}</td>
              <td>{game.platform}</td>
              <td>{game.publisher}</td>
              <td>{game.rank}</td>
              <td>{game.year}</td>
              <td>{game.northAmericanSales}</td>
              <td>{game.europeSales}</td>
              <td>{game.japanSales}</td>
              <td>{game.otherSales}</td>
              <td>{game.globalSales}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      
    </div>
  );
}
 
export default GameTable;