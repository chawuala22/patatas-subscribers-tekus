export interface ISubscriber {
    SystemId:                     null;
    Area:                         string;
    PublicId:                     number;
    CountryCode:                  string;
    CountryName:                  null;
    Name:                         string;
    Email:                        string;
    JobTitle:                     string;
    PhoneNumber:                  string;
    PhoneCode:                    null;
    PhoneCodeAndNumber:           string;
    LastActivityUtc:              null;
    LastActivity:                 null;
    SubscriptionDate:             null;
    SubscriptionMethod:           number;
    SubscriptionState:            number;
    SubscriptionStateDescription: string;
    Topics:                       any[];
    Activity:                     string;
    ConnectionState:              number;
    Id:                           number;
}