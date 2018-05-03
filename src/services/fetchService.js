import axios from 'axios';

const FETCH_ERROR = {
  fetchError: 'Participant not found'
};
const POST_ERROR = {
  postError: 'There was an error saving the data'
};

const pbsCodeRegex = /^(\d{5}|\d{4}\D{1}|\D{1}\d{4})$/;

const _fetchService = url => {
  const options = {
    url,
    headers: {
      'Ocp-Apim-Subscription-Key': "c0d159ad39084f6b882e49ec5eb06f7d", // TODO: remove key from here and use Heroku config
      'Content-Type': 'application/json',
      'Ocp-Apim-Trace': 'true' 
    }
  };
  return axios(options)
  .then(res => res.status === 200 && res.data ? res.data : FETCH_ERROR)
  .catch(() => FETCH_ERROR);
};

const _postService = (url, data) => {
  const options = {
    url,
    method: 'post',
    headers: {
      'Ocp-Apim-Subscription-Key': "c0d159ad39084f6b882e49ec5eb06f7d", // TODO: remove key from here and use Heroku config
      'Content-Type': 'application/json',
      'Ocp-Apim-Trace': 'true' 
    },
    data
  };
  return axios(options)
  .then(res => [200, 201].includes(res.status) && res.data ? res.data : POST_ERROR)
  .catch(() => POST_ERROR);
};

const _putService = (url, data) => {
  const options = {
    url,
    method: 'put',
    headers: {
      'Ocp-Apim-Subscription-Key': "c0d159ad39084f6b882e49ec5eb06f7d", // TODO: remove key from here and use Heroku config
      'Content-Type': 'application/json',
      'Ocp-Apim-Trace': 'true' 
    },
    data
  };
  return axios(options)
  .then(res => [200, 201].includes(res.status) && res.data ? res.data : POST_ERROR)
  .catch(() => POST_ERROR);
};

export const fetchParticipants = participantId => (_fetchService(`https://guildlink.azure-api.net/research/v1/participants?participantCode=${participantId}`));
export const fetchSurveyId = surveyCode => (_fetchService(`https://guildlink.azure-api.net/research/v1/surveys?surveyCode=${surveyCode}&status=draft`));
export const postSurvey = (surveyId, data) => (_postService(`https://guildlink.azure-api.net/research/v1/surveys/${surveyId}/responses`, data));
export const postNotes = (participantId, data) => (_postService(`https://guildlink.azure-api.net/research/v1/participants/${participantId}/notes`, data));
export const putNotes = (participantId, noteId, data) => (_putService(`https://guildlink.azure-api.net/research/v1/participants/${participantId}/notes/${noteId}`, data));
export const postMeds = (participantId, data) => (_postService(`https://guildlink.azure-api.net/research/v1/participants/${participantId}/medications`, data));
export const putMeds = (participantId, medId, data) => (_putService(`https://guildlink.azure-api.net/research/v1/participants/${participantId}/medications/${medId}`, data));

export const searchMeds = searchStr => (pbsCodeRegex.test(searchStr)
  ? _fetchService(`https://guildlink.azure-api.net/medicines/v1/drugs?pbsCode=${searchStr}`)
  : _fetchService(`https://guildlink.azure-api.net/medicines/v1/drugs?name=${searchStr}`)
);
