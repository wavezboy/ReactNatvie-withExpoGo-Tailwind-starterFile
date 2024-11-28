import Svg, {
  Path,
  Mask,
  G,
  Defs,
  Rect,
  ClipPath,
  Circle,
} from "react-native-svg";

export const LogoIcon = () => (
  <Svg width="30" height="28" viewBox="0 0 30 28" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.3467 4.40359C18.9569 -1.46785 10.4822 -1.46786 7.09227 4.40358L1.19308 14.6213C-2.1968 20.4927 2.04055 27.832 8.82031 27.832H20.6187C27.3984 27.832 31.6358 20.4927 28.2459 14.6213L22.3467 4.40359ZM5.9173 15.0272C12.44 14.0125 13.5996 12.8529 14.7592 6.3302C15.7738 12.8529 16.9334 14.0125 23.4561 15.0272C16.9334 16.1867 15.7738 17.3463 14.6142 23.869C13.5996 17.3463 12.44 16.1867 5.9173 15.0272Z"
      fill="#29C302"
    />
  </Svg>
);

export const MessageIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Circle cx="11.5" cy="11.5" r="7.5" fill="#29C302" />
    <Path
      d="M2 11.9997C2.0005 9.80727 2.72148 7.67579 4.05199 5.93326C5.38249 4.19074 7.24877 2.93375 9.3636 2.35574C11.4784 1.77774 13.7246 1.91076 15.7565 2.73432C17.7883 3.55789 19.4932 5.02636 20.6087 6.91374C21.7243 8.80111 22.1886 11.0028 21.9304 13.1799C21.6721 15.3571 20.7055 17.389 19.1794 18.963C17.6533 20.537 15.6521 21.5659 13.484 21.8912C11.3159 22.2166 9.10092 21.8204 7.18 20.7637L3.292 21.9477C3.11858 22.0005 2.93407 22.0052 2.75819 21.9612C2.58231 21.9173 2.42168 21.8264 2.2935 21.6982C2.16531 21.57 2.07438 21.4094 2.03043 21.2335C1.98648 21.0576 1.99117 20.8731 2.044 20.6997L3.228 16.8057C2.42153 15.3322 1.9992 13.6794 2 11.9997ZM8 10.9997C8 11.2649 8.10536 11.5192 8.29289 11.7068C8.48043 11.8943 8.73478 11.9997 9 11.9997H15C15.2652 11.9997 15.5196 11.8943 15.7071 11.7068C15.8946 11.5192 16 11.2649 16 10.9997C16 10.7345 15.8946 10.4801 15.7071 10.2926C15.5196 10.105 15.2652 9.99967 15 9.99967H9C8.73478 9.99967 8.48043 10.105 8.29289 10.2926C8.10536 10.4801 8 10.7345 8 10.9997ZM9 13.9997C8.73478 13.9997 8.48043 14.105 8.29289 14.2926C8.10536 14.4801 8 14.7345 8 14.9997C8 15.2649 8.10536 15.5192 8.29289 15.7068C8.48043 15.8943 8.73478 15.9997 9 15.9997H13C13.2652 15.9997 13.5196 15.8943 13.7071 15.7068C13.8946 15.5192 14 15.2649 14 14.9997C14 14.7345 13.8946 14.4801 13.7071 14.2926C13.5196 14.105 13.2652 13.9997 13 13.9997H9Z"
      fill="#FFBF00"
    />
  </Svg>
);

export const QuestionIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <G clip-path="url(#clip0_1704_932)">
      <Path
        d="M20 10C20 11.9778 19.4135 13.9112 18.3147 15.5557C17.2159 17.2002 15.6541 18.4819 13.8268 19.2388C11.9996 19.9957 9.98891 20.1937 8.0491 19.8078C6.10929 19.422 4.32746 18.4696 2.92894 17.0711C1.53041 15.6725 0.578004 13.8907 0.192152 11.9509C-0.1937 10.0111 0.00433286 8.00042 0.761209 6.17316C1.51809 4.3459 2.79981 2.78412 4.4443 1.6853C6.08879 0.586489 8.02219 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.80429 20 7.34783 20 10Z"
        fill="#FFBF00"
      />
      <Path
        d="M11.2502 15.417C11.2502 15.6642 11.1769 15.9059 11.0395 16.1115C10.9021 16.317 10.7069 16.4772 10.4785 16.5718C10.2501 16.6664 9.99878 16.6912 9.7563 16.643C9.51382 16.5947 9.29109 16.4757 9.11628 16.3009C8.94146 16.1261 8.82241 15.9033 8.77418 15.6609C8.72595 15.4184 8.7507 15.167 8.84531 14.9386C8.93992 14.7102 9.10014 14.515 9.3057 14.3777C9.51126 14.2403 9.75294 14.167 10.0002 14.167C10.3317 14.167 10.6496 14.2987 10.884 14.5331C11.1185 14.7675 11.2502 15.0855 11.2502 15.417ZM10.0002 4.16699C7.70225 4.16699 5.8335 5.84928 5.8335 7.91699V8.33366C5.8335 8.55467 5.92129 8.76663 6.07757 8.92291C6.23385 9.07919 6.44582 9.16699 6.66683 9.16699C6.88784 9.16699 7.0998 9.07919 7.25608 8.92291C7.41236 8.76663 7.50016 8.55467 7.50016 8.33366V7.91699C7.50016 6.77116 8.62204 5.83366 10.0002 5.83366C11.3783 5.83366 12.5002 6.77116 12.5002 7.91699C12.5002 9.06282 11.3783 10.0003 10.0002 10.0003C9.77915 10.0003 9.56719 10.0881 9.41091 10.2444C9.25463 10.4007 9.16683 10.6126 9.16683 10.8337V11.667C9.16683 11.888 9.25463 12.1 9.41091 12.2562C9.56719 12.4125 9.77915 12.5003 10.0002 12.5003C10.2212 12.5003 10.4331 12.4125 10.5894 12.2562C10.7457 12.1 10.8335 11.888 10.8335 11.667V11.592C12.7335 11.243 14.1668 9.72741 14.1668 7.91699C14.1668 5.84928 12.2981 4.16699 10.0002 4.16699Z"
        fill="#29C302"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1704_932">
        <Rect width="20" height="20" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const SearchIcon = () => (
  <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
    <Path
      d="M16.9781 16.92L20.0736 20M19.1801 11.581C19.1801 15.768 15.7801 19.162 11.5871 19.162C7.39316 19.162 3.99316 15.768 3.99316 11.582C3.99316 7.393 7.39316 4 11.5861 4C15.7801 4 19.1801 7.394 19.1801 11.581Z"
      stroke="#FFBF00"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export const ArrowIcon = () => (
  <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <G clip-path="url(#clip0_1710_960)">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.7803 8.46989C11.9209 8.61053 11.9999 8.80126 11.9999 9.00014C11.9999 9.19901 11.9209 9.38974 11.7803 9.53039L7.53751 13.7731C7.46833 13.8448 7.38557 13.9019 7.29407 13.9412C7.20256 13.9805 7.10415 14.0012 7.00456 14.0021C6.90498 14.0029 6.80622 13.984 6.71405 13.9463C6.62188 13.9085 6.53814 13.8528 6.46772 13.7824C6.3973 13.712 6.34161 13.6283 6.3039 13.5361C6.26619 13.4439 6.24721 13.3452 6.24808 13.2456C6.24894 13.146 6.26963 13.0476 6.30894 12.9561C6.34824 12.8646 6.40538 12.7818 6.47701 12.7126L10.1895 9.00014L6.47701 5.28764C6.34039 5.14618 6.2648 4.95673 6.26651 4.76008C6.26822 4.56344 6.34709 4.37533 6.48615 4.23627C6.6252 4.09722 6.81331 4.01834 7.00996 4.01663C7.20661 4.01492 7.39606 4.09052 7.53751 4.22714L11.7803 8.46989Z"
        fill="#767676"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1710_960">
        <Rect width="18" height="18" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
