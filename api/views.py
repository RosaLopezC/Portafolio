from rest_framework.views import APIView
from rest_framework.response import Response

class PortfolioData(APIView):
    def get(self, request):
        data = {
            "name": "Rosa López",
            "description": "Estudiante de Diseño y Desarrollo, Diseñadora Gráfica",
            "skills": ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Django"],
        }
        return Response(data)
