export const eventsFields = [{
  placeholder: '🎉 Event Name',
  name: 'eventName',
}, {
  placeholder: '🎍 Host Name',
  name: 'hostName',
}, {
  placeholder: '🗓 Start time/date',
  name: 'startTime',
  classes: 'half-width',
}, {
  placeholder: '🏁 End time/date',
  name: 'endTime',
  classes: 'half-width',
}, {
  placeholder: '🏡 Street Name',
  name: 'street',
}, {
  placeholder: '🚀 Suburb',
  name: 'suburb',
}, {
  placeholder: '📍 State',
  name: 'state',
  classes: 'half-width',
}, {
  placeholder: '📪  Post Code',
  name: 'postcode',
  classes: 'half-width',
}];

export const initialState = {
  eventName: '',
  hostName: '',
  startTime: '',
  endTime: '',
  street: '',
  suburb: '',
  state: '',
  postcode: '',
};
