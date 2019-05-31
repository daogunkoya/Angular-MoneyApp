import {UserEffects} from '../users/store/user.effects'
import {ReceiverEffects} from '../receivers/store/receiver.effects'
import {TransactionEffect} from '../transactions/store/transaction.effects.'
import {SenderEffects} from '../senders/store/sender.effects'

export const effects = [
    UserEffects,
    ReceiverEffects,
    TransactionEffect,
    SenderEffects
]