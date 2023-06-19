
/* Interface is created for typing the response that brings the information to be used */
export interface ISubscriber {
    SystemId?:                     null;
    Area:                         string;
    PublicId?:                     number;
    CountryCode:                  string;
    CountryName?:                  null;
    Name:                         string;
    Email:                        string;
    JobTitle:                     string;
    PhoneNumber:                  string;
    PhoneCode?:                    null;
    PhoneCodeAndNumber?:           string;
    LastActivityUtc?:              null;
    LastActivity?:                 null;
    SubscriptionDate?:             null;
    SubscriptionMethod?:           number;
    SubscriptionState?:            number;
    SubscriptionStateDescription?: string;
    Topics?:                       any[];
    Activity?:                     string;
    ConnectionState?:              number;
    Id:                           number;
}

/* Interface created for typing responses in Observables */
export interface IResult{
    count: number;
    Data: ISubscriber[];
}

/* Interface is created to type the credentials used in the refresh token function. */
export interface ICredencial{
    UserName: string;
    Password: string;
}