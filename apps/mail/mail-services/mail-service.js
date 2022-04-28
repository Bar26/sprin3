import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"

export const mailService = {
    query,
    updateReadState,
    updateStarredState,
    deleteMail,
    addMail
}


const MAIL_KEY = 'mailsDB'

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const gMails = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimesipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Rachel Green',
        to: 'user@appsus.com',
        status: 'inbox'
    },
    {
        id: 'e102',
        subject: 'how you doinggg!',
        body: 'Would love to catch up sometimesipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'joey tribbiani',
        to: 'user@appsus.com',
        status: 'inbox'
    },
    {
        id: 'e103',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimesipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: true,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Monica Geler',
        to: 'user@appsus.com',
        status: 'inbox'
    },
    {
        id: 'e104',
        subject: 'lets push and commit!',
        body: 'Would love to catch up sometimesipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Ross Geller',
        to: 'user@appsus.com',
        status: 'inbox'
    },
    {
        id: 'e105',
        subject: 'Sale- only today!',
        body: 'Would love to catch up sometimesipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium ',
        isRead: true,
        isStarred: false,
        sentAt: 1251132930294,
        from: 'Chendler Bing',
        to: 'user@appsus.com',
        status: 'inbox'
    },
    {
        id: 'e106',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimeipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: 1551133930594,
        from: 'pheobe buffay',
        to: 'user@appsus.com',
        status: 'sent'
    }
]

const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
    isRead: true,
    sentAt: 1551133930594,
    from: 'user@appsus.com',
    to: 'momo@momo.com',
    status: 'sent'
}

function updateReadState(mailToUpdate) {
    let mails = storageService.loadFromStorage(MAIL_KEY)
    mailToUpdate.isRead = !mailToUpdate.isRead
    mails = mails.map(mail => mail.id === mailToUpdate.id ? mailToUpdate : mail)
    storageService.saveToStorage(MAIL_KEY, mails)
}


function query(critirea) {
    let mails
    console.log(critirea)
    mails = storageService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = gMails
        storageService.saveToStorage(MAIL_KEY, mails)
    }

    // if(!critirea.status||!critirea.txt||!critirea.isRead||!critirea.isStared) return Promise.resolve(mails)
    mails = mails.filter(mail => mail.status === critirea.status && (mail.body.includes(critirea.txt) ||
        mail.subject.includes(critirea.txt) || mail.from.includes(critirea.txt)))
    if (critirea.isRead !== null && critirea.isRead !== 'all') {
        console.log(critirea.isRead)
        console.log(critirea.isRead)
        mails = mails.filter(mail => {

            return mail.isRead + '' === critirea.isRead
        })
    }
    if (critirea.isStarred) mails = mails.filter(mail => mail.isStarred)
    console.log(mails)
    return Promise.resolve(mails)
}

function _createMail(subject, body, to) {
    console.log('creating mail')
    const id = utilService.makeId
    let status = to === 'user@appsus.com' ? 'inbox' : 'sent'
    const from='Lee Sadot'
    const sentAt = Date.now()
    const mail = {
        id,
        from,
        subject,
        body,
        isRead: false,
        isStarred: false,
        sentAt,
        to,
        status
    }
    return mail
}

function updateStarredState(mailToUpdate) {
    let mails = storageService.loadFromStorage(MAIL_KEY)
    mailToUpdate.isStarred = !mailToUpdate.isStarred
    mails = mails.map(mail => mail.id === mailToUpdate.id ? mailToUpdate : mail)
    storageService.saveToStorage(MAIL_KEY, mails)
}

function deleteMail(mailToDelete) {
    console.log(mailToDelete)
    let mails = storageService.loadFromStorage(MAIL_KEY)
    const idx = mails.findIndex(mail => mail.id === mailToDelete.id)
    console.log(idx)
    mails.splice(idx, 1)
    storageService.saveToStorage(MAIL_KEY, mails)
}

function addMail(to, subject, body) {
    console.log('adding a mail')
    const mail= _createMail(to, subject, body)
    let mails = storageService.loadFromStorage(MAIL_KEY)
    mails.unshift(mail)
    storageService.saveToStorage(MAIL_KEY, mails)
    console.log(mails)
}

