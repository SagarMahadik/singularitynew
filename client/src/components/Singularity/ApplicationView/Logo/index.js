import * as React from 'react';
import {
  CenterAlignedColumnContainer,
  IconItemGroupContainer,
  IconItemContainer,
  ItemPriceContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

const SvgComponent = React.forwardRef((props, ref) => {
  return (
    <svg viewBox="0 0 1440 1440" height={110} width={110} {...props} ref={ref}>
      <defs>
        <clipPath id="prefix__a" clipPathUnits="userSpaceOnUse">
          <path d="M0 1080h1080V0H0z" />
        </clipPath>
      </defs>
      <g
        clipPath="url(#prefix__a)"
        transform="matrix(1.33333 0 0 -1.33333 0 1440)"
      >
        <path
          d="M499.294 320.942c-30.718 4.621-59.729 14.395-86.11 28.481 6.251-1.293 13.24-1.877 14.525-1.938h222.268c.44-.03 1.791-.1 3.684-.1 2.305 0 5.397.108 8.596.493-48.588-25.259-105.179-35.678-162.963-26.936m-152.829 136.32c2.038-1.153 4.022-2.259 5.56-3.13l167.837-96.88c.984-.486 3.814-1.8 7.12-3.123H427.97c-5.928.454-16.554 1.876-19.792 3.76-3.245 1.876-9.796 10.365-13.032 15.063zm108.67-51.032H622.751c1.19.092 5.151.44 9.133 1.153l-76.406-44.12c-4.637-2.22-13.17-5.744-16.362-5.744-3.184 0-11.734 3.523-16.148 5.628l-75.984 43.867a41.59 41.59 0 018.151-.784m-58.837 82.342c1.061-.63 2.115-1.269 3.168-1.845l124.948-72.139c.584-.262 2.023-.946 3.798-1.692h-72.477c-11.534-.192-18.692 3.884-23.65 13.687zm157.727-73.868l124.878 72.116s1.338.86 3.33 2.16l-35.9-62.213c-2.676-3.883-7.398-9.91-9.597-11.172-2.184-1.254-9.804-2.345-14.247-2.699h-72.478c1.823.784 3.345 1.484 4.014 1.808m172.136 39.398c.192.123 2.414 1.392 5.274 3.091l-48.71-84.396c-2.645-5.004-8.305-13.717-12.41-15.877-4.774-2.907-16.017-2.999-20.153-2.776l-98.944-.015a119.576 119.576 0 017.367 3.221zm70.086 48.364a3.352 3.352 0 01-4.23-2.122c-19.968-60.35-59.643-109.177-110.008-141.102 3.492 4.652 6.13 9.512 6.552 10.327l73.931 128.06a3.335 3.335 0 01-1.207 4.577c-1.592.898-3.637.37-4.56-1.232l-18.292-31.694c-5.668-3.69-15.494-9.334-15.61-9.396l-76.582-44.213c2.63 3.123 4.951 6.43 5.727 7.543l42.96 74.415c.076.163.092.301.13.448.108.222.2.445.238.668.04.208.016.408.016.631 0 .214 0 .415-.054.623-.046.23-.13.438-.238.683-.06.123-.077.278-.17.423-.03.04-.06.047-.092.077-.13.2-.292.331-.453.485-.162.153-.323.315-.515.446-.032.023-.054.068-.093.093-.13.07-.3.07-.423.145-.23.092-.445.17-.676.224-.208.037-.408.022-.646.022-.207-.022-.423 0-.616-.069-.245-.038-.46-.153-.667-.253-.147-.062-.286-.062-.43-.162-6.999-4.444-14.834-9.635-14.834-9.635L550.92 420.592c-3.53-1.674-9.697-4.167-11.803-4.167-1.892 0-7.613 2.168-11.595 4.061l-124.763 72.031c-4.984 2.807-10.397 6.336-14.495 9.45h-.007a2.789 2.789 0 01-1.169.561c-.223.084-.446.047-.677.07-.199.014-.4.053-.615.023a3.11 3.11 0 01-1.214-.408h-.016c-.23-.154-.384-.346-.577-.53-.13-.108-.284-.2-.4-.33a3.627 3.627 0 01-.577-1.185c-.045-.216-.03-.423-.037-.639-.008-.207-.063-.423-.039-.638a3.26 3.26 0 01.415-1.237l42.882-74.254c1.361-2.714 2.93-5.052 4.667-7.098l-75.568 43.636a2796.682 2796.682 0 00-15.439 8.728l-18.662 32.308c-.915 1.601-2.96 2.13-4.552 1.232a3.363 3.363 0 01-1.222-4.577l74.046-128.246c.645-.915 4.613-6.642 8.857-11.402-51.917 32.187-92.008 81.903-112.168 142.363a3.318 3.318 0 01-4.214 2.107 3.313 3.313 0 01-2.107-4.206c32.664-98.02 116.367-168.484 218.424-183.907a275.774 275.774 0 0141.383-3.123c116.22 0 221.2 73.846 258.676 187.045.593 1.74-.369 3.615-2.106 4.206M578.938 847.876c30.365-4.598 59.06-14.209 85.195-28.027-4.075 1.061-8.666 1.561-13.97 1.561h-222.57c-5.698 0-10.888-.923-15.655-2.614 49.472 26.805 107.624 38.046 167 29.08m152.237-135.743c-2.715 1.66-4.775 2.898-4.99 3.03l-167.677 96.82a68.32 68.32 0 01-5.652 2.753h97.306c16.046 0 23.974-4.583 32.61-18.76zm-108.685 50.91l-166.816-.009c-3.368-.076-6.352-.415-9.089-.999l76.352 44.082c11.911 6.897 19.793 6.897 32.303.038l75.568-43.628a43.53 43.53 0 01-8.319.515m59.875-83.003a218.442 218.442 0 00-3.59 2.414l-124.826 72.062a60.524 60.524 0 01-3.768 1.846l72.478.015c2.507.123 9.911-.13 13.925-2.676 5.29-3.368 9.55-10.887 9.603-11.003zm-158.203 74.415L399.375 682.4a87.428 87.428 0 01-3.253-2.022l35.962 62.281c5.812 10.096 11.595 13.426 23.666 13.703h72.124a46.612 46.612 0 01-3.713-1.907m-172.236-39.369a295.185 295.185 0 01-5.206-3.06l48.395 83.857c7.344 12.687 17.954 18.854 32.48 18.854h97.566a58.554 58.554 0 01-5.559-2.845zm-69.932-48.749a3.658 3.658 0 011.053-.176c1.4 0 2.7.9 3.16 2.291 20.453 61.767 61.513 111.515 113.553 143.38-3.976-3.362-7.474-7.52-10.419-12.627l-73.922-128.038a3.333 3.333 0 011.223-4.553 3.342 3.342 0 014.559 1.215l18.43 31.925c5.029 3.275 9.766 6.167 15.624 9.558l76.246 44.012c-1.83-2.052-3.552-4.468-5.198-7.327l-43.205-74.83c-.085-.147-.085-.308-.153-.462-.093-.216-.193-.43-.224-.653-.031-.224-.015-.43 0-.654 0-.208 0-.4.03-.616.063-.238.17-.453.278-.676.06-.139.077-.3.169-.43.023-.03.062-.047.077-.078.123-.184.315-.323.469-.484.16-.146.316-.315.484-.43.046-.023.062-.054.093-.07.146-.092.307-.092.453-.154.223-.092.437-.19.668-.23.216-.03.431 0 .64 0 .207 0 .421 0 .63.04.237.052.437.16.668.268.131.061.292.076.438.176 2.022 1.315 4.083 2.746 6.114 4.13 3.198 2.221 6.228 4.305 8.78 5.774l124.786 72.047c8.666 5.005 14.11 5.005 23.183.038l124.548-71.9s8.865-5.998 15.271-10.128a.128.128 0 00.076-.03 3.49 3.49 0 01.57-.254c.1-.038.177-.084.283-.115.255-.069.524-.115.801-.115.03 0 .062-.009.062-.009h.015c.037 0 .1.01.13.01.231.021.477.037.685.098.1.016.184.07.276.1.178.062.361.116.522.224.025.007.04.007.055.015.023.015.04.046.084.076.292.178.547.408.777.693.062.062.123.123.17.207.03.04.07.07.1.116.1.123.107.276.168.415.101.223.216.438.27.676.053.216.031.408.053.616 0 .215.016.43-.022.654-.039.222-.147.437-.224.653-.077.154-.077.307-.146.454l-43.212 74.838c-.13.231-2.06 3.66-5.137 7.266l75.953-43.843c.108-.069 10.012-6.02 15.517-9.65l18.43-31.94a3.373 3.373 0 012.9-1.669c.568 0 1.145.146 1.668.446a3.343 3.343 0 011.222 4.56l-74.014 128.208c-2.869 4.705-5.76 8.503-8.835 11.564 52.01-32.187 92.17-81.935 112.345-142.487.584-1.745 2.46-2.706 4.213-2.106a3.336 3.336 0 012.116 4.22c-32.67 98.006-116.36 168.476-218.433 183.908-131.96 19.931-258.177-57.407-300.067-183.923-.584-1.745.385-3.629 2.123-4.214"
          fill="#cea42b"
        />
        <path
          d="M288.183 580.034c3.429-.045 5.052-.068 7.45-.092 2.26-.03 4.452 0 6.644.138 11.272.707 19.384 8.497 20.007 18.908.66 10.634-6.143 19.7-16.763 21.214-5.597.792-11.394.14-17.338.14zm-18.661 58.691c7.457-.015 14.786.008 22.036 0 6.675-.007 13.287.008 19.862-1.238 18.038-3.429 30.533-20.76 29.633-38.922-.915-18.207-14.602-33.5-32.732-36.016-6.521-.89-13.18-.784-20.3-1.168V529.91h-18.5zM790.45 584.087c.115 19.422-16.087 36.13-35.216 36.269-20.108.139-36.678-15.81-36.893-35.5-.207-20.03 16.417-36.977 36.17-36.885 19.607.1 35.824 16.393 35.938 36.116m-36.138 54.6c30.08.062 54.24-23.96 54.408-54.1.138-30.25-24.159-54.84-54.247-54.885-30.056-.031-54.692 24.444-54.769 54.454-.085 30.057 24.36 54.454 54.608 54.532M464.67 606.14s-8.658-27.105-12.848-40.192h26.035c-4.298 13.226-13.187 40.191-13.187 40.191m-18.315-58.476c-1.6-4.774-6.244-17.647-6.244-17.647s-11.933.054-18.161.054c1.676 5.476 34.124 109.032 34.124 109.032h16.839s34.309-107.879 34.593-109.086H489.29l-6.467 17.647s-18.085.047-36.47 0M590.94 639.025v-17.916h-23.482v-91.145h-18.746v90.823H524.86v18.238zM683.356 639.071V621.11h-23.528v-91.115h-18.74v90.854H617.26v18.223zM370.133 639.025h17.977V529.964h-17.977z"
          fill="#cea42b"
          fillRule="evenodd"
        />
        <path
          d="M198.75 488.477l.26-.834c.843-2.732 1.692-4.818 2.546-6.253a11.486 11.486 0 013.26-3.556c1.49-1.081 3.165-1.763 5.03-2.051a12.198 12.198 0 015.508.408c2.005.622 3.75 1.643 5.232 3.072 1.484 1.425 2.5 3.043 3.048 4.857.45 1.454.597 3.017.438 4.683-.159 1.668-.655 3.845-1.484 6.527l-.147.475zm-8.75 4.788l36.958 11.433 2.393-7.738c1.13-3.655 1.733-6.822 1.806-9.5.072-2.673-.369-5.114-1.323-7.31-.652-1.594-1.606-3.112-2.856-4.562a20.991 20.991 0 00-4.306-3.775 20.063 20.063 0 00-5.139-2.44c-2.692-.833-5.483-1.071-8.379-.712-2.894.358-5.46 1.259-7.702 2.709a16.156 16.156 0 00-3.728 3.123c-1.048 1.2-1.99 2.664-2.824 4.392-.837 1.733-1.656 3.89-2.455 6.48zM208.706 440.118l35.043 16.39 8.796-18.81-6.29-2.939-5.762 12.321-8.08-3.779 5.504-11.774-6.29-2.943-5.505 11.778-8.093-3.785 5.762-12.326-6.29-2.939zM237.641 406.875l3.997-6.34c-1.23-.891-1.965-1.973-2.202-3.242-.238-1.271.056-2.561.88-3.865.794-1.265 1.845-2.052 3.15-2.366 1.304-.313 2.565-.084 3.78.683 1.42.891 2.238 2.107 2.46 3.635.197 1.325-.002 3.153-.595 5.488-.209.858-.346 1.38-.406 1.574-.289 1.419-.439 2.59-.443 3.506 0 1.819.45 3.541 1.347 5.17a10.54 10.54 0 003.678 3.919 10.42 10.42 0 005.436 1.629c1.964.04 3.822-.413 5.573-1.37a11.323 11.323 0 004.243-3.988c1.118-1.779 1.74-3.631 1.86-5.564a10.5 10.5 0 00-1.146-5.513c-.886-1.743-2.188-3.217-3.906-4.427l-3.935 6.24c.991.752 1.581 1.653 1.773 2.704.192 1.051-.037 2.092-.69 3.123-.603.961-1.409 1.533-2.42 1.733-1.009.199-2.015-.02-3.016-.653-.973-.612-1.568-1.409-1.785-2.39-.219-.981-.115-2.411.316-4.283l.416-1.698c.615-2.675.824-4.866.625-6.569-.433-3.482-2.149-6.171-5.147-8.059-1.927-1.215-3.989-1.857-6.186-1.931a12.11 12.11 0 00-6.23 1.454c-1.957 1.046-3.543 2.53-4.754 4.447-1.947 3.088-2.507 6.359-1.686 9.816.352 1.549.97 2.913 1.856 4.099.657 1.006 1.71 2.021 3.157 3.038M262.874 369.169l4.769-5.782c-1.106-1.041-1.699-2.206-1.773-3.501-.075-1.29.378-2.53 1.361-3.72.949-1.151 2.092-1.8 3.427-1.942 1.335-.145 2.555.238 3.663 1.15 1.292 1.066 1.952 2.375 1.98 3.924.025 1.335-.404 3.123-1.288 5.364a45.566 45.566 0 01-.602 1.514c-.466 1.37-.762 2.51-.884 3.422-.23 1.798-.003 3.565.68 5.299a10.55 10.55 0 003.149 4.347 10.417 10.417 0 005.187 2.31c1.945.29 3.845.07 5.703-.652a11.381 11.381 0 004.713-3.42c1.335-1.62 2.187-3.382 2.553-5.285.366-1.902.219-3.77-.438-5.613-.658-1.838-1.763-3.466-3.312-4.886l-4.697 5.693c.887.872 1.36 1.838 1.417 2.904.058 1.065-.303 2.07-1.08 3.013-.722.872-1.594 1.344-2.622 1.409-1.026.07-1.995-.274-2.909-1.026-.886-.732-1.374-1.598-1.467-2.6-.092-1 .192-2.405.857-4.213l.628-1.628c.948-2.575 1.434-4.717 1.454-6.435.01-3.511-1.35-6.39-4.084-8.646-1.758-1.45-3.72-2.351-5.889-2.704a12.135 12.135 0 00-6.365.652c-2.077.792-3.835 2.063-5.279 3.81-2.323 2.819-3.297 5.992-2.918 9.522.151 1.579.589 3.014 1.319 4.304.526 1.08 1.439 2.22 2.747 3.416M287.332 325.068l26.418 28.264 15.167-14.179-4.741-5.075-9.938 9.293-6.094-6.52 9.498-8.874-4.741-5.075-9.498 8.88-6.1-6.529 9.938-9.289-4.742-5.075zM340.367 306.696l3.2-2.256c1.98-1.394 3.78-2.056 5.406-1.987 1.626.07 2.978.867 4.054 2.39 1.033 1.47 1.3 3.058.799 4.777-.261.842-.635 1.54-1.118 2.087-.485.552-1.315 1.24-2.487 2.071l-3.243 2.286zm-17.541-12.436l22.308 31.605 9.14-6.454c2.015-1.419 3.522-2.725 4.518-3.92a10.636 10.636 0 002.119-4.054c.476-1.718.55-3.52.224-5.398-.326-1.878-.996-3.53-2.005-4.96-.846-1.2-1.97-2.272-3.364-3.213-1.394-.946-2.774-1.573-4.136-1.882a10.283 10.283 0 00-3.518-.205c-1.266.125-2.687.498-4.268 1.121l.32-17.7-7.211 5.09.272 17.954-8.551-12.112zM368.127 265.37l14.767 28.1-6.301 3.31 3.23 6.147 19.022-10-3.229-6.147-6.385 3.357-14.767-28.099zM433.762 249.429l7.241-1.937c-.296-1.49-.099-2.785.591-3.875.687-1.096 1.777-1.843 3.27-2.242 1.44-.383 2.746-.25 3.916.408 1.17.659 1.942 1.679 2.313 3.069.434 1.618.21 3.067-.667 4.343-.757 1.1-2.144 2.305-4.166 3.62a52.78 52.78 0 01-1.367.882c-1.178.84-2.08 1.598-2.71 2.266-1.232 1.334-2.074 2.904-2.525 4.706a10.567 10.567 0 00.038 5.374 10.398 10.398 0 002.881 4.896 11.069 11.069 0 005.02 2.778c1.933.493 3.874.479 5.825-.045 2.027-.542 3.742-1.483 5.147-2.818a10.526 10.526 0 002.903-4.821c.533-1.877.58-3.845.142-5.902l-7.127 1.902c.214 1.226.038 2.287-.535 3.188-.575.9-1.452 1.509-2.632 1.828-1.093.288-2.077.164-2.95-.38-.875-.537-1.465-1.38-1.772-2.524-.296-1.111-.19-2.102.314-2.968.508-.871 1.557-1.848 3.145-2.93l1.46-.96c2.266-1.544 3.907-3.007 4.92-4.392 2.047-2.854 2.615-5.991 1.698-9.413-.587-2.201-1.66-4.074-3.222-5.622a12.156 12.156 0 00-5.56-3.163c-2.147-.568-4.319-.553-6.509.03-3.529.946-6.164 2.963-7.909 6.056-.795 1.375-1.268 2.793-1.422 4.268-.205 1.186-.12 2.645.25 4.378M483.052 227.326l4.368 31.44-7.05.981.956 6.878 21.284-2.958-.956-6.878-7.143.991-4.37-31.44zM520.84 262.183l7.159-.08-.274-24.14c-.017-1.592.01-2.698.085-3.316.074-.612.264-1.255.57-1.922.49-1.031 1.19-1.843 2.099-2.445.906-.603 1.885-.911 2.936-.922.968-.015 1.91.229 2.82.727.913.498 1.615 1.156 2.108 1.972.438.688.729 1.415.876 2.187.14.767.225 1.967.24 3.59l.274 24.135 7.226-.08-.274-24.14c-.03-2.564-.27-4.621-.717-6.174a11.738 11.738 0 00-2.267-4.26c-1.234-1.503-2.788-2.698-4.661-3.595-1.87-.891-3.733-1.33-5.59-1.31-1.748.02-3.521.469-5.317 1.34a14.426 14.426 0 00-4.594 3.472c-1.133 1.35-1.917 2.823-2.358 4.427-.438 1.598-.642 3.735-.612 6.4zM579.744 232.545l.866.115c2.834.383 5.035.876 6.59 1.479a11.357 11.357 0 014.043 2.63c1.314 1.29 2.261 2.829 2.854 4.622a12.09 12.09 0 01.507 5.498 12.95 12.95 0 01-2.16 5.667c-1.16 1.698-2.59 2.968-4.289 3.81-1.359.687-2.873 1.085-4.547 1.205-1.673.12-3.899-.01-6.683-.383l-.494-.065zm-6.166-7.84l-5.169 38.339 8.027 1.08c3.795.514 7.018.584 9.667.215 2.65-.373 4.986-1.21 6.997-2.515 1.46-.906 2.8-2.096 4.025-3.571a20.868 20.868 0 003.008-4.87 20.092 20.092 0 001.56-5.474c.377-2.79.15-5.583-.683-8.382-.832-2.794-2.147-5.18-3.945-7.146a16.108 16.108 0 00-3.7-3.162c-1.35-.832-2.954-1.52-4.796-2.058-1.847-.537-4.109-.99-6.794-1.35zM628.784 234.487l-9.87 37.407 6.922 1.827 9.871-37.406zM666.281 281.113c-2.256-.94-4.094-2.336-5.519-4.179a12.712 12.712 0 01-2.589-6.22c-.304-2.3.01-4.572.946-6.808a13.143 13.143 0 014.183-5.454c1.878-1.444 3.97-2.34 6.276-2.684 2.31-.343 4.522-.075 6.643.812 2.127.887 3.88 2.276 5.26 4.163 1.374 1.883 2.216 4.005 2.515 6.365a13.102 13.102 0 01-.91 6.798 12.829 12.829 0 01-4.11 5.334 13.308 13.308 0 01-6.176 2.644c-2.276.35-4.453.09-6.519-.77m-3.247 6.164c3.476 1.454 7.012 1.957 10.602 1.52 3.596-.444 6.824-1.749 9.687-3.915 2.864-2.166 5.011-4.96 6.435-8.382 1.4-3.352 1.863-6.803 1.384-10.349-.472-3.546-1.798-6.749-3.974-9.607-2.176-2.854-4.94-4.98-8.287-6.38-3.352-1.4-6.808-1.863-10.359-1.4-3.556.47-6.763 1.78-9.622 3.935-2.858 2.156-4.985 4.911-6.385 8.263a19.824 19.824 0 00-1.394 10.338c.458 3.561 1.738 6.78 3.845 9.637 2.106 2.863 4.795 4.976 8.068 6.34M752.56 292.876l-23.188 30.963 4.985 3.735 23.188-30.963zM813.683 366.38l5.349 6.385c.652-1.47 1.1-2.64 1.349-3.501.249-.866.434-1.888.553-3.068a20.835 20.835 0 00-.29-5.214 20.251 20.251 0 00-1.593-4.976 19.873 19.873 0 00-2.778-4.377c-2.302-2.744-5.151-4.712-8.537-5.907-3.386-1.191-6.858-1.48-10.408-.862-3.551.618-6.72 2.097-9.503 4.428-2.754 2.31-4.736 5.15-5.947 8.51-1.21 3.363-1.518 6.799-.925 10.31.587 3.506 2.03 6.629 4.317 9.358a20.147 20.147 0 006.216 4.97 20.093 20.093 0 007.599 2.227 14.26 14.26 0 003.078.025c.957-.105 2.247-.35 3.87-.743l-5.24-6.25c-1.245-.064-2.26-.184-3.048-.358a12.823 12.823 0 01-2.514-.872c-1.878-.861-3.427-2.012-4.637-3.456-1.46-1.738-2.355-3.745-2.694-6.022-.34-2.27-.1-4.497.712-6.677.812-2.182 2.127-4.03 3.939-5.554a12.956 12.956 0 016.166-2.878 13.532 13.532 0 016.748.487c2.192.733 4.009 1.963 5.453 3.69a12.054 12.054 0 012.317 4.309c.294 1.006.472 1.922.532 2.74.06.82.035 1.912-.084 3.276M833.006 404.419l4.78 8.128-12.694 2.226-1.33.584 1.16-.873zm6.838-20.324l-25.181 33.492 2.849 4.836 41.59-5.598-3.998-6.798-10.718 1.45-6.958-11.83 6.41-8.764zM869.053 438.444l-35.778 14.722 7.485 18.193 6.42-2.644-4.762-11.57 8.253-3.396 4.528 11.001 6.418-2.645-4.526-10.996 14.687-6.04zM884.537 480.274l-37.322 10.174 5.463 20.031 6.698-1.825-3.58-13.126 8.605-2.346 3.422 12.541 6.698-1.828-3.422-12.54 8.622-2.35 3.581 13.124 6.698-1.828z"
          fill="#cea42b"
        />
      </g>
    </svg>
  );
});

export default SvgComponent;
