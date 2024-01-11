import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../../../assets/css/board.module.scss'
import Row from '../row/Row';
import DiceContainer from "../dice/DiceContainer";
import PlayerContainer from '../player/PlayerContainer';
import { connect } from 'react-redux';
import PlayerDetailsContainer from '../player/PlayerDetailsContainer';
import Actions from '../modal/Actions';
import ActionInfo from '../action/ActionInfo';
import DoneButton from '../donebutton/DoneButton';
import { BoardGame } from '../row/BoardCell';
import { setIsEnd } from '../../../redux/actions/board';

const GameNotice = ({ totalPlayers, players }) => {
    const noticeStyle = {
      backgroundColor: '#f44336', // Red background color
      color: '#ffffff', // White text color
      padding: '15px',
      borderRadius: '5px',
      textAlign: 'center',
      margin: '20px 0',
    };

    const buttonStyle = {
        backgroundColor: 'grey', // Green background color
        color: '#ffffff', // White text color
        padding: '10px 15px',
        borderRadius: '3px',
        cursor: 'pointer',
        border: 'none',
        fontSize: '16px',
        marginTop: '10px',
    };

    var bankruptPlayer = 0;
    for(let player = 0; player < totalPlayers; player++) {
        if(players[player].money < 0) {
            bankruptPlayer = player;
            break;
        }
    }

    const navigate = useNavigate();

    const handleReturnHome = () => {
        // Navigate to the homepage
        navigate('/waitroom');
    };
  
    return (
        <div style={noticeStyle}>
          <h2>Game Over</h2>
          <p>Player {bankruptPlayer} is bankrupt!!! </p>
          <button style={buttonStyle} onClick={handleReturnHome}>Return to Home Page</button>
        </div>
    );
};

const Board = ({ side, totalPlayers, sites, active, isEnd, players }) => {
    return (
        <>
            <div className={style.board} style={{ width: side + "px", height: side + "px" }} >
                {[
                    sites.slice(0, 10).reverse(),
                    sites.slice(10, 20),
                    sites.slice(20, 30),
                    sites.slice(30, 40).reverse(),
                ].map((data, index) => <Row key={index} data={data} rowNum={index + 1} />)}
                {isEnd && <GameNotice totalPlayers={totalPlayers} players={players} />}
                {!isEnd && <DiceContainer />}
                {!isEnd && <DoneButton />}
                <PlayerContainer totalPlayers={totalPlayers} />
                {active && <ActionInfo />}
            </div>
            <PlayerDetailsContainer />
            <Actions />
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setIsEnd: isEnd => dispatch(setIsEnd(isEnd)),
    }
}

const mapStateToProps = (store) => {
    return {
        side: store.board.side,
        totalPlayers: store.playersData.totalPlayers,
        players: store.playersData.players,
        sites: store.siteData.sites,
        active: store.actionData.active,
        isEnd: store.board.isEnd
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Board)