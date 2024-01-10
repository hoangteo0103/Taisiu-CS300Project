import style from '../../../assets/css/auction-card-modal.module.scss'
import CardModal from './CardModal'
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { debitPlayerMoney } from '../../../redux/actions/player';
import { setIsDone } from '../../../redux/actions/board'
import { setShowModal } from '../../../redux/actions/modal'
import { buySite } from '../../../redux/actions/site'

const BID = "BID"
const FOLD = "FOLD"

const AuctionCardModal = ({ sites, card, totalPlayers, activePlayer, players, debitPlayerMoney, setShowModal, buySite, setIsDone }) => {
    useEffect(() => {
        setIsDone(true);
        setShowModal(false, null);
    }
    )

    return (
        <div className={`${style.auction} ${style.row}`}>
            
        </div>
    );
}

const mapStateToProps = (store) => {
    return {
        sites: store.siteData.sites,
        totalPlayers: store.playersData.totalPlayers,
        activePlayer: store.playersData.activePlayer,
        players: store.playersData.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        debitPlayerMoney: (playerId, amount) => dispatch(debitPlayerMoney(playerId, amount)),
        setShowModal: (showModal, currentModal) => dispatch(setShowModal(showModal, currentModal)),
        buySite: (playerId, siteData) => dispatch(buySite(playerId, siteData)),
        setIsDone: (isDone) => dispatch(setIsDone(isDone)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuctionCardModal) 