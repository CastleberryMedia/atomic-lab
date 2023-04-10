import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "multipart/form-data; boundary=something",
};

const base_url = "https://api.atomiclabco.com/public/api";

//notifications
export const getNotifications = async (user_id) =>
  axios.get(`${base_url}/get_data_actions/${user_id}`);

//user
export const getDataUser = async (user_id) =>
  axios.get(`${base_url}/get_data_user/${user_id}`);
export const updateCreditsUser = async ({ user_id, value }) =>
  axios.put(`${base_url}/update_credits/${user_id}`, {
    value: value,
  });
export const updateTourView = async ({ user_id, value }) =>
  axios.put(`${base_url}/update_tour/${user_id}`, {
    value: value,
  });
export const updateOnboardingView = async ({ user_id, value }) =>
  axios.put(`${base_url}/update_onboarding/${user_id}`, {
    value: value,
  });
export const updateOnboardingData = async ({ user_id, data }) =>
  axios.put(`${base_url}/update_onboarding_data/${user_id}`, data);
export const updateConfigurations = async ({ user_id, data }) =>
  axios.put(`${base_url}/update_configurations/${user_id}`, data);

//projects
export const getAllProjects = async (user_id) =>
  axios.get(`${base_url}/get_data_user_projects/${user_id}`);

export const postCreateProject = async (formData) =>
  axios.post(`${base_url}/project_values`, formData, {
    headers: headers,
  });
export const addReviews = async (formData) =>
  axios.post(`${base_url}/load_versions`, formData, {
    headers: headers,
  });
export const updateFlow = async ({ project_id, id_flow }) =>
  axios.put(`${base_url}/update_flow_project/${project_id}`, {
    id_flow: id_flow,
  });
export const updateNotes = async ({ project_id, notes }) =>
  axios.put(`${base_url}/update_notes_project/${project_id}`, {
    notes: notes,
  });
export const updateDateReview = async ({ project_id, date }) =>
  axios.put(`${base_url}/update_review/${project_id}`, {
    date: date,
  });

export const postFinalDesigns = async (formData) =>
  axios.post(`${base_url}/upload_files_finish_project`, formData, {
    headers: headers,
  });

export const getFinalDesigns = async (project_id) =>
  axios.get(`${base_url}/get_files_finish_project/${project_id}`);

//Designers
export const postAssignDesignerProject = async (data) =>
  axios.post(`${base_url}/assign_designer`, data);
export const getAssignDesignerProject = async (id_project) =>
  axios.get(`${base_url}/get_designers_by_prokect/${id_project}`);
export const deleteAssignDesignerProject = async (union_id) =>
  axios.delete(`${base_url}/project_designers/${union_id}`);

//login
export const postLogin = async (data) => axios.post(`${base_url}/login`, data);
export const postCreateAccount = async (data) =>
  axios.post(`${base_url}/register`, data);

//brands
export const getBrands = async (user_id) =>
  axios.get(`${base_url}/get_data_user_brands/${user_id}`);
export const postCreateBrand = async (data) =>
  axios.post(`${base_url}/brands`, data);

export const putUpdateBrand = async ({ data, brand_id }) =>
  axios.put(`${base_url}/brands/${brand_id}`, data);

export const putPredeterminateBrand = async ({ user_id, brand_id }) =>
  axios.put(`${base_url}/update_predeterminate/${brand_id}`, {
    user_id: user_id,
  });

//team
export const getTeam = async (user_id) =>
  axios.get(`${base_url}/get_data_user_teams/${user_id}`);
export const postAddTeam = async (data) =>
  axios.post(`${base_url}/teams`, data);
export const deleteMemberTeam = async (member_id) =>
  axios.delete(`${base_url}/teams/${member_id}`);

//attached
export const getAttached = async (user_id) =>
  axios.get(`${base_url}/get_data_user_attached/${user_id}`);

//reviews
export const getReviewsProject = async (project_id) =>
  axios.get(`${base_url}/get_last_versions_data/${project_id}`);
export const putFinishReview = async ({
  project_id,
  img_id,
  aditionalComments,
}) =>
  axios.put(`${base_url}/finish_revision/${project_id}`, {
    img_id: img_id,
    general_comments: aditionalComments,
  });

//annotations
export const postCreateAnnotation = async (data) =>
  axios.post(`${base_url}/annotations`, data);
export const getAnnotationsImage = async (image_id) =>
  axios.get(`${base_url}/get_annotations_by_image_id/${image_id}`);

export const updateProfileData = async (body) =>
  axios.put(`${base_url}/users/${body.user_id}`, body);

export const postHelp = async (data) =>
  axios.post(`${base_url}/supports`, data);

export const updateFinalComments = async ({ project_id, comments_finals }) =>
  axios.put(`${base_url}/update_comments_finals_project/${project_id}`, {
    comments_finals: comments_finals,
  });

//recovery password
export const recoveryPassword = async (email) =>
  axios.get(`${base_url}/consult_password_recovery/${email}`);

//new password
export const newPassword = async ({ user_id, data }) =>
  axios.put(`${base_url}/reset_password/${user_id}`, data);

//delete proyect
export const putDeleteProject = async (project_id) =>
  axios.put(`${base_url}/remove_project/${project_id}`);

//Invite person to project
export const putinvite = async (data) =>
  axios.put(`${base_url}/invite_user/${data.user_id}`, data);
