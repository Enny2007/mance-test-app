import { useParams } from "react-router-dom";

import EnterpriseLayout from "../use-cases/enterprise/EnterpriseLayout";
import GovernmentLayout from "../use-cases/government/GovernmentLayout";
import HealthcareLayout from "../use-cases/healthcare/HealthcareLayout";

const UseCaseDetail = () => {
  const { slug } = useParams();

  switch (slug) {
    case "enterprise":
      return <EnterpriseLayout />;

    case "government":
      return <GovernmentLayout />;

    case "healthcare":
      return <HealthcareLayout />;

    default:
      return (
        <div className="text-5xl margin-20">
          <h1>Use case not found</h1>
        </div>
      );
  }
};

export default UseCaseDetail;
