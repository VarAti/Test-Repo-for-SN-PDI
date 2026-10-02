import { gs } from '@servicenow/glide'

export function showStateUpdate(current, previous) {
    const currentState = current.getValue('state')
    const previousState = previous.getValue('state')

    gs.addInfoMessage(`The current state is updated from "${previousState}" to "${currentState}"`)
}
