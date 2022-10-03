import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "multipart/form-data; boundary=something",
};

//notifications
export const getNotifications = async (user_id) =>
  axios.get(`https://api.ticvzla.xyz/public/api/get_data_actions/${user_id}`);

//user
export const getDataUser = async (user_id) =>
  axios.get(`https://api.ticvzla.xyz/public/api/get_data_user/${user_id}`);
export const updateCreditsUser = async ({ user_id, value }) =>
  axios.put(`https://api.ticvzla.xyz/public/api/update_credits/${user_id}`, {
    value: value,
  });
export const updateTourView = async ({ user_id, value }) =>
  axios.put(`https://api.ticvzla.xyz/public/api/update_tour/${user_id}`, {
    value: value,
  });
export const updateOnboardingView = async ({ user_id, value }) =>
  axios.put(`https://api.ticvzla.xyz/public/api/update_onboarding/${user_id}`, {
    value: value,
  });
export const updateOnboardingData = async ({ user_id, data }) =>
  axios.put(
    `https://api.ticvzla.xyz/public/api/update_onboarding_data/${user_id}`,
    data
  );
export const updateConfigurations = async ({ user_id, data }) =>
  axios.put(
    `https://api.ticvzla.xyz/public/api/update_configurations/${user_id}`,
    data
  );

//projects
export const getAllProjects = async (user_id) =>
  axios.get(
    `https://api.ticvzla.xyz/public/api/get_data_user_projects/${user_id}`
  );
export const postCreateProject = async (formData) =>
  axios.post(`https://api.ticvzla.xyz/public/api/project_values`, formData, {
    headers: headers,
  });
export const addReviews = async (formData) =>
  axios.post(`https://api.ticvzla.xyz/public/api/load_versions`, formData, {
    headers: headers,
  });
export const updateFlow = async ({ project_id, id_flow }) =>
  axios.put(
    `https://api.ticvzla.xyz/public/api/update_flow_project/${project_id}`,
    { id_flow: id_flow }
  );
export const updateNotes = async ({ project_id, notes }) =>
  axios.put(
    `https://api.ticvzla.xyz/public/api/update_notes_project/${project_id}`,
    { notes: notes }
  );
export const updateDateReview = async ({ project_id, date }) =>
  axios.put(`https://api.ticvzla.xyz/public/api/update_review/${project_id}`, {
    date: date,
  });

export const postFinalDesigns = async (formData) =>
  axios.post(
    `https://api.ticvzla.xyz/public/api/upload_files_finish_project`,
    formData,
    {
      headers: headers,
    }
  );

export const getFinalDesigns = async (project_id) =>
  axios.get(
    `https://api.ticvzla.xyz/public/api/get_files_finish_project/${project_id}`
  );

//Designers
export const postAssignDesignerProject = async (data) =>
  axios.post(`https://api.ticvzla.xyz/public/api/assign_designer`, data);
export const getAssignDesignerProject = async (id_project) =>
  axios.get(
    `https://api.ticvzla.xyz/public/api/get_designers_by_prokect/${id_project}`
  );
export const deleteAssignDesignerProject = async (union_id) =>
  axios.delete(
    `https://api.ticvzla.xyz/public/api/project_designers/${union_id}`
  );

//login
export const postLogin = async (data) =>
  axios.post(`https://api.ticvzla.xyz/public/api/login`, data);
export const postCreateAccount = async (data) =>
  axios.post(`https://api.ticvzla.xyz/public/api/register`, data);

//brands
export const getBrands = async (user_id) =>
  axios.get(
    `https://api.ticvzla.xyz/public/api/get_data_user_brands/${user_id}`
  );
export const postCreateBrand = async (data) =>
  axios.post(`https://api.ticvzla.xyz/public/api/brands`, data);

export const putUpdateBrand = async ({ data, brand_id }) =>
  axios.put(`https://api.ticvzla.xyz/public/api/brands/${brand_id}`, data);

export const putPredeterminateBrand = async ({ user_id, brand_id }) =>
  axios.put(
    `https://api.ticvzla.xyz/public/api/update_predeterminate/${brand_id}`,
    { user_id: user_id }
  );

//team
export const getTeam = async (user_id) =>
  axios.get(
    `https://api.ticvzla.xyz/public/api/get_data_user_teams/${user_id}`
  );
export const postAddTeam = async (data) =>
  axios.post(`https://api.ticvzla.xyz/public/api/teams`, data);
export const deleteMemberTeam = async (member_id) =>
  axios.delete(`https://api.ticvzla.xyz/public/api/teams/${member_id}`);

//attached
export const getAttached = async (user_id) =>
  axios.get(
    `https://api.ticvzla.xyz/public/api/get_data_user_attached/${user_id}`
  );

//reviews
export const getReviewsProject = async (project_id) =>
  axios.get(
    `https://api.ticvzla.xyz/public/api/get_last_versions_data/${project_id}`
  );
export const putFinishReview = async ({ project_id, img_id }) =>
  axios.put(
    `https://api.ticvzla.xyz/public/api/finish_revision/${project_id}`,
    { img_id: img_id }
  );

//annotations
export const postCreateAnnotation = async (data) =>
  axios.post(`https://api.ticvzla.xyz/public/api/annotations`, data);
export const getAnnotationsImage = async (image_id) =>
  axios.get(
    `https://api.ticvzla.xyz/public/api/get_annotations_by_image_id/${image_id}`
  );

export const updateProfileData = async (body) =>
  axios.put(`https://api.ticvzla.xyz/public/api/users/${body.user_id}`, body);
