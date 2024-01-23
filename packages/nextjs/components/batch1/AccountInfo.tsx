import { useAccount } from "wagmi";
import { CheckBadgeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const AccountInfo = () => {
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

  if (!accountState.address) {
    return null;
  }

  return (
    <>
      <div className="text-xs space-y ml-2">
        <div>
          <div className="flex justify-between items-center">
            AllowListed{" "}
            {userAllowlistData ? (
              <CheckBadgeIcon className="stroke-success" width={16} />
            ) : (
              <XMarkIcon className="stroke-error" width={16} />
            )}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            Checked in{" "}
            {userContractAddressData != "0x0000000000000000000000000000000000000000" ? (
              <CheckBadgeIcon className="stroke-success" width={16} />
            ) : (
              <XMarkIcon className="stroke-error" width={16} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountInfo;
