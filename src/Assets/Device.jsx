const size = {
    smallDevices: '576px',
    mediumDevices: '768px',
    largeDevices: '992px',
    extraLargeDevices: '1200px'
}

export const device = {
    smallDevices: `(max-width: ${size.smallDevices})`,
    mediumDevices: `(max-width: ${size.mediumDevices})`,
    largeDevices: `(max-width: ${size.largeDevices})`,
    extraLargeDevices: `(max-width: ${size.extraLargeDevices})`
}