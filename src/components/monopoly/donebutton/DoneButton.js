import { connect } from 'react-redux';
import style from '../../../assets/css/done-button.module.scss'
import { setActivePlayer } from '../../../redux/actions/player'
import { setIsDone, setIsEnd } from '../../../redux/actions/board'

const DoneButton = ({ isDone, setActivePlayer, setIsDone, setIsEnd, totalPlayers, players }) => {
    const done = () => {
        if (isDone) {
            for(let player = 0; player < totalPlayers; player++) {
                if(players[player].money < 0) {
                    setIsEnd(true);
                    break;
                }
            }
            setActivePlayer();
            setIsDone(false);
        }
    }
    return (
        <button onClick={done} className={`${style.doneButton} ${!isDone ? style.inactive : ""}`}>Done</button>
    );
}

const mapStateToProps = (store) => {
    return {
        isDone: store.board.isDone,
        totalPlayers: store.playersData.totalPlayers,
        players: store.playersData.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActivePlayer: () => dispatch(setActivePlayer()),
        setIsDone: (isDone) => dispatch(setIsDone(isDone)),
        setIsEnd: (isEnd) => dispatch(setIsEnd(isEnd)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoneButton)