// @flow

export type InputType = 'checkbox' | 'color' | 'date' | 'email' | 'hidden' | 'month' | 'number' | 'password' | 'radio' | 'search' | 'tel' | 'text' | 'textarea' | 'time' | 'url' | 'week' | 'sliding-checkbox'

export type Applicant = {
  id: number,
  email: string,
  name: ?string,
  token: string,
  createdAt: ?Date,
  updatedAt: ?Date,
  passedAt: ?Date,
  baseAt: ?Date,
  _baseStatus: ?string,
  videoPath: ?string,
  videoUploadedAt: ?Date,
  attempts: ?number,
  portfolio: ?Array<*>,
  availableIn?: any,
  country?: any,
  ghAccount?: any,
  questions?: Array<any>
}

export type Filters = {
  listId?: number,
  emailAddress?: string,
  fullName?: string,
  skills?: string,
  proSkills?: string,
  applicantStatuses?: string[],
  timezoneOffsets?: string[],
  pathname?: string,
  search?: string,
  hash?: string,
  state?: string,
  maxRate?: number,
  minExperienceYears?: number,
  availableBefore?: string,
  all?: boolean,
  accepted?: boolean,
  excluded?: boolean,
  notes?: string,
  sort?: string,
  order?: 'ASC' | 'DESC' | 'NONE' | ''
}

export type Experience = {
  id: number,
  role: string,
  company: string,
  start_date: Date,
  end_date: ?Date,
  highlights: string,
  skills?: Array<string>
}
