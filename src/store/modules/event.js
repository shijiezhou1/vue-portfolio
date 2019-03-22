import EventService from '@/services/EventService.js'

export const namespaced = true

export const state = { 
    events: [],
    eventsTotal: 0,
    event: {},
    perPage: 3
}

