import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";

declare global {
  namespace Navigation {
    type RootNavigationList = {
      Auth: undefined;
      App: undefined;
      Staff: undefined;
    };

    type AuthNavigationList = {
      Login: undefined;
      Password: undefined;
      OTP: undefined;
      Register: undefined;
      ChangePass: undefined;
    };

    type AppNavigationList = {
      Home: undefined;
      WalletList: undefined;
      QRList: undefined;
      RewardHome: undefined;
      NotificationList: undefined;
      NotificationDetail: undefined;
      MoreList: undefined;
      Profile: undefined;
      SettingList: undefined;
      DeviceList: undefined;
      DeviceDetail: undefined;
      ReferralShare: undefined;
      MoreSubList: undefined;
      Feedback: undefined;
    };

    type StaffNavigationList = {
      StaffList: undefined;
      Profile: undefined;
    };

    type BottomTabNavigationList = {
      HomeTab: undefined;
      WalletTab: undefined;
      QRTab: undefined;
      RewardsTab: undefined;
      MoreTab: undefined;
    };

    type AuthNavigationProp = NativeStackNavigationProp<AuthNavigationList>;

    type AppNavigationProp = NativeStackNavigationProp<AppNavigationList>;

    type HomeScreenNavProps = CompositeScreenProps<
      BottomTabScreenProps<BottomTabNavigationList, "HomeTab">,
      NativeStackScreenProps<AppNavigationList>
    >;
  }
}
