import { useAccount } from "wagmi";
import { CheckBadgeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export default function AccountInfo() {
  const accountState = useAccount();

  const { data: userContractAddressData } = useScaffoldContractRead({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [accountState.address],
  });

  const { data: userAllowlistData } = useScaffoldContractRead({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [accountState.address],
  });

  console.log(userContractAddressData);
  console.log(userAllowlistData);

  return (
    <>
      {userAllowlistData !== undefined && userContractAddressData !== undefined && (
        <div className="py-2 px-5 ml-4 rounded-2xl text-sm font-semibold bg-[#DAE8FF]">
          <div>
            {userAllowlistData == true ? (
              <div className="flex flex-row content-center">
                AllowListed <CheckBadgeIcon className="ml-1" color="green" width={20} />
              </div>
            ) : (
              <div className="flex flex-row content-center">
                AllowListed <XMarkIcon className="ml-1" color="red" width={20} />
              </div>
            )}
          </div>
          <div>
            {userContractAddressData != "0x0000000000000000000000000000000000000000" ? (
              <div className="flex flex-row content-center">
                Checked in <CheckBadgeIcon className="ml-1" color="green" width={20} />
              </div>
            ) : (
              <div className="flex flex-row content-center">
                Checked in <XMarkIcon className="ml-1" color="red" width={20} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
